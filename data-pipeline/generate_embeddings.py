from google.cloud import aiplatform
from vertexai.preview.language_models import TextEmbeddingModel
import os

PROJECT_ID = os.getenv("GCP_PROJECT_ID")
LOCATION = os.getenv("GCP_REGION", "us-central1")

EMBEDDING_MODEL = "textembedding-gecko@005"

def init_vertex_ai(project: str, location: str):
    aiplatform.init(project=project, location=location)

def get_embeddings(texts, batch_size=250):

    texts = [text for text in texts if text.strip()]
    if not texts:
        print("No valid text entries to embed.")
        return []

    model = TextEmbeddingModel.from_pretrained("text-embedding-005")
    all_embeddings = []

    for i in range(0, len(texts), batch_size):
        batch = texts[i:i + batch_size]
        print(f"Processing batch {i} to {i + len(batch)}...")


        batch = [text for text in batch if text.strip()]
        if not batch:
            continue

        embeddings_response = model.get_embeddings(batch)
        batch_embeddings = [embedding.values for embedding in embeddings_response]
        all_embeddings.extend(batch_embeddings)

    return all_embeddings
