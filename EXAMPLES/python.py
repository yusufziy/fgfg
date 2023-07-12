import requests

licensekey = "YOUR_LICENSE_KEY" # Get this from a config file
product = "YOUR_PRODUCT_NAME"
api_key = "YOUR_API_KEY"
url = "http://YOUR_URL/api/client"


# Code
headers = {'Authorization': api_key}
data = {'licensekey': licensekey, 'product': product }
response = requests.post(url, headers=headers, json=data)
status = response.json()

if status['status_overview'] == "success":
    print("Your license key is valid!")
    print("Discord ID: " + status['discord_id'])
else:
    print("Your license key is invalid!")
    print("Create a ticket in our discord server to get one.")
    exit()