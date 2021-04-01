# NodeJS Choreography-based saga pettern

## Archiecture
<img src="./Images/Capture.PNG" with="50%">




## APPs
- SOA HomeCheckInService (Producer)
- FBB Portal Service (Consumer)

## Stacks
- MongoDB
- Kafka (Message Queue System)

# Demo Step
An support technician SOA application that uses this approach would create case using a choreography-based saga that consists of the following steps:


RAW DATA
```json
{
    "internetNo": "8850049302",
    "orderNo": "5960915_106347524.2",
    "staffCode": "cs_eng_ftth",
    "jobStatus": "homecheckedin",
    "checkinLatitude": 13.7827811,
    "checkinLongitude": 100.5465937,
    "checkinDate": "2021-03-18 10:13:43"
}
```

1. Client Request with CURL http://localhost:3000/api/SOA/home/checkin
```bash
curl --location --request POST 'http://localhost:3000/api/SOA/home/checkin' \
--header 'Content-Type: application/json' \
--data-raw '{
    "internetNo": "8850049302",
    "orderNo": "5960915_106347524.2",
    "staffCode": "cs_eng_ftth",
    "jobStatus": "homecheckedin",
    "checkinLatitude": 13.7827811,
    "checkinLongitude": 100.5465937,
    "checkinDate": "2021-03-18 10:13:43"
}'
```
2. The SOA HomeCheckInService receives the POST /api/SOA/homeCheckIn and creates a HomeCheckIn in a PENDING state
3. It then emits an Home CheckIn Created event
4. The FBB Portal Service’s event handler attempts to save check in status and logging.


