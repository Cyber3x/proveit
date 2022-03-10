
import geopy.distance

current_location = (45.761025, 16.005809)
match_location = (45.777756, 16.003575)

distance = geopy.distance.distance(current_location, match_location).km
print(distance)
            