import googlemaps
from dotenv import load_dotenv
import os
import json

load_dotenv()

API_KEY = os.getenv("PLACES_API_KEY")

client = googlemaps.Client(API_KEY)

# print(client.find_place(
#     input=["restaurant"],
#     input_type="textquery",
#     fields=["name", "formatted_address"]
# ))

print(client.places(
    "pizza",
    location=(51.3811, -2.3590),
    radius=10,
))