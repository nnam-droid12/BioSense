import os
from dotenv import load_dotenv
from gcs_download import download_folder
from parse_xml_csv import parse_csv, parse_xml
from upload_to_mongo import upload_to_mongo
from generate_embeddings import init_vertex_ai, get_embeddings

load_dotenv()

BUCKET_NAME = os.getenv("BUCKET_NAME")
LOCAL_DIR = "./gcs_data"
GCP_PROJECT_ID = os.getenv("GCP_PROJECT_ID")
GCP_REGION = os.getenv("GCP_REGION")
FOLDERS = ["articles", "clinical_trials", "drugs"]

def process_all():
    print("Initializing Vertex AI...")
    init_vertex_ai(project=GCP_PROJECT_ID, location=GCP_REGION)

    for folder in FOLDERS:
        prefix = f"{folder}/"
        destination = os.path.join(LOCAL_DIR, folder)
        os.makedirs(destination, exist_ok=True)

        print(f"\n--- Downloading {folder} ---")
        download_folder(bucket_name=BUCKET_NAME, prefix=prefix, destination_dir=destination)

        all_data = []
        print(f"--- Parsing files in {folder} ---")
        for file in os.listdir(destination):
            path = os.path.join(destination, file)
            if path.endswith(".csv"):
                all_data.extend(parse_csv(path))
            elif path.endswith(".xml"):
                all_data.extend(parse_xml(path))

        print(f"--- Generating embeddings for {folder} ---")
        texts = [doc.get("Title", "") for doc in all_data]
        embeddings = get_embeddings(texts)
        for i, emb in enumerate(embeddings):
            all_data[i]["embedding"] = emb

        print(f"--- Uploading {folder} to MongoDB ---")
        upload_to_mongo(all_data, folder)

    print("\n✅ Pipeline completed successfully!")

if __name__ == "__main__":
    process_all()
