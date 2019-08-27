import axios from 'axios';

//creates an instance of axios with some preset features 
export default axios.create({
    // GET https://api.yelp.com/v3/businesses/search
    baseURL: 'https://api.yelp.com/v3/businesses',
    //for authorisation 
    headers: {
        Authorization: 'Bearer FDU8qy7h5WSGVeu0cWFzb5a-ePrNGFxsu3rZl4DeOtf7i3ouiqgeMtecZKYDoFY-dLj_U36CEoFOqpcFc01bb2Fb1UhbFEK3lLqysEBfjX3w0g1bVr_GGM-p0bJfXXYx'
    }
});

