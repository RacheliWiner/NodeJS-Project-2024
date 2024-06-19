export default function myPipeline(query) {
  const pipeline = [
    {
      '$lookup': {
        'from': 'Location',
        'localField': 'Location',
        'foreignField': '_id',
        'as': 'location_info'
      }
    }, {
      '$unwind': {
        'path': '$location_info'
      }
    }, {
      '$lookup': {
        'from': 'Cities',
        'localField': 'location_info.cityCode',
        'foreignField': '_id',
        'as': 'location_info.city_info'
      }
    }, {
      '$unwind': {
        'path': '$location_info.city_info'
      }
    }, {
      '$lookup': {
        'from': 'Streets',
        'localField': 'location_info.streetCode',
        'foreignField': '_id',
        'as': 'location_info.street_info'
      }
    }, {
      '$unwind': {
        'path': 'location_info.street_info'
      }
    }, {
      '$lookup': {
        'from': 'Statuses',
        'localField': 'statusCode',
        'foreignField': '_id',
        'as': 'status_info'
      }
    }, {
      '$lookup': {
        'from': 'Priorities',
        'localField': 'priorityCode',
        'foreignField': '_id',
        'as': 'priority_info'
      }
    }, {
      '$unwind': {
        'path': '$status_info'
      }
    }, {
      '$unwind': {
        'path': '$priority_info'
      }
    }, {
      '$addFields': {
        'city': '$location_info.city_info.name',
        'street': '$location_info.street_info.name',
        'number': '$location_info.number',
        'priority': '$priority_info.name',
        'status': '$status_info.name'
      }
    }, {
      '$project': {
        'Location': 0,
        'location_info': 0,
        'location_info.city_info': 0,
        'location_info.street_info': 0,
        'location_info.number': 0,
        'status_info': 0,
        'priority_info': 0
      }
    }
  ]

  for (let i of query) {
    pipeline.splice(pipeline.length - 1, 0, i);
  }

  return pipeline;
}