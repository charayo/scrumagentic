# from fastapi.testclient import TestClient
# from app import app

# client = TestClient(app)

# def test_generate_response():
#     response = client.get("/generate-response?prompt=What is the capital of France?")
#     assert response.status_code == 200
#     assert "Paris" in response.json()["response"]