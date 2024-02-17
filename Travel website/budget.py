import requests
from flask import Flask, render_template, request

app = Flask(__name__)

# Replace with the actual API endpoint and your API key
API_ENDPOINT = 'https://api.example.com/travel'
API_KEY = 'your_api_key_here'

# Define a function to calculate the budget
def calculate_budget(destination, num_persons, num_days):
    try:
        # Create API request parameters
        params = {
            'destination': destination,
            'persons': num_persons,
            'days': num_days,
            'apiKey': API_KEY
        }

        # Make the API request
        response = requests.get(API_ENDPOINT, params=params)

        if response.status_code == 200:
            data = response.json()
            # Extract relevant cost information from the API response
            accommodation_cost = data['accommodation_cost']
            transportation_cost = data['transportation_cost']

            # Calculate the total budget
            total_budget = accommodation_cost + transportation_cost
            return total_budget

        else:
            return None  # Return None to indicate an error

    except Exception as e:
        print(f"Error: {e}")
        return None

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        destination = request.form['destination']
        num_persons = int(request.form['num_persons'])
        num_days = int(request.form['num_days'])

        # Calculate the budget
        budget = calculate_budget(destination, num_persons, num_days)
        
        if budget is not None:
            return render_template('result.html', budget=budget)
        else:
            return "Error: Unable to calculate the budget. Please try again later."

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
