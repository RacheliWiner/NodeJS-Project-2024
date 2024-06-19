export default function myPipeline(query) {
  const pipeline = []
    // const pipeline = [
    //   {
    //     '$lookup': {
    //       'from': 'location',
    //       'localField': 'location',
    //       'foreignField': '_id',
    //       'as': 'location_info'
    //     }
    //   }, {
    //     '$lookup': {
    //       'from': 'status',
    //       'localField': 'status',
    //       'foreignField': '_id',
    //       'as': 'status_info'
    //     }
    //   }, {
    //     '$lookup': {
    //       'from': 'priority',
    //       'localField': 'importance',
    //       'foreignField': '_id',
    //       'as': 'priority_info'
    //     }
    //   }, {
    //     '$unwind': {
    //       'path': '$location_info'
    //     }
    //   }, {
    //     '$unwind': {
    //       'path': '$status_info'
    //     }
    //   }, {
    //     '$unwind': {
    //       'path': '$priority_info'
    //     }
    //   }, {
    //     '$addFields': {
    //       'city': '$location_info.city',
    //       'street': '$location_info.street',
    //       'importance': '$priority_info.description',
    //       'status': '$status_info.description'
    //     }
    //   }, {
    //     '$project': {
    //       'location': 0,
    //       'location_info': 0,
    //       'status_info': 0,
    //       'priority_info': 0
    //     }
    //   }
    // ]
  
    for(let i of query){
      pipeline.splice(pipeline.length-1, 0, i); 
    }
    
    return pipeline;
  }