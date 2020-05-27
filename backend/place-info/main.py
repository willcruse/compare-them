import googlemaps
from dotenv import load_dotenv
import os
import json


def GetPlaces(request):
    load_dotenv()
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return '', 204, headers

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }

    API_KEY = os.getenv("PLACES_API_KEY")

    request_json = request.get_json()#
    keys = list(request_json.keys())
    if not all([i in keys for i in ["searchTerm"]]):
        return json.dumps({"error": "missing-key"}), 500, headers

    client = googlemaps.Client(API_KEY)
    places = client.places(
        request_json.get("searchTerm", ""),
        location=(51.3811, -2.3590),
        radius=10
    )
    return json.dumps({"places": places}), 200, headers