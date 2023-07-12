final String apiURL = "http://YOUR_URL/api/client";
final String apiKey = "YOUR_API_KEY";
final String licenseKey = "YOUR_LICENSE_KEY";
final String product = "YOUR_PRODUCT_NAME";

try {
    URL url = new URL(apiURL);
    HttpURLConnection connection = (HttpURLConnection)url.openConnection();
    connection.setRequestMethod("POST");
    connection.setRequestProperty("Content-Type", "application/json");
    connection.setRequestProperty("Authorization", apiKey);
    connection.setDoOutput(true);

    String jsonInputString = String.format("{\"licensekey\": \"%s\", \"product\": \"%s\"}", licenseKey, product);

    try(OutputStream outputStream = connection.getOutputStream()) {
    byte[] input = jsonInputString.getBytes("utf-8");
        outputStream.write(input, 0, input.length);
    }

    try(BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"))) {
        StringBuilder response = new StringBuilder();
        String responseLine = null;
        while ((responseLine = br.readLine()) != null) {
            response.append(responseLine.trim());
        }

        // You can use 3rd Party libarys to parse and handle the JSON object
        // I'm using javas inbuilt features to check the response string

        if(response.toString().contains("\"status_id\":\"SUCCESS\"")){
            System.out.println("Your license key is valid!");
        }
        else{
            System.out.println("Your license key is invalid!\nCreate a ticket in our discord server to get one.");
            System.exit(0);
        }
    }
} catch (Exception e) {
    throw new RuntimeException(e);
}