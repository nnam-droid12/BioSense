# gcs_download.py
from google.cloud import storage
import os

def download_folder(bucket_name: str, prefix: str, destination_dir: str):
    client = storage.Client()
    bucket = client.bucket(bucket_name)
    blobs = bucket.list_blobs(prefix=prefix)

    os.makedirs(destination_dir, exist_ok=True)

    for blob in blobs:
        if blob.name.endswith("/") or not blob.name:
            continue
        dest_path = os.path.join(destination_dir, os.path.basename(blob.name))
        blob.download_to_filename(dest_path)
        print(f"Downloaded: {blob.name} to {dest_path}")
