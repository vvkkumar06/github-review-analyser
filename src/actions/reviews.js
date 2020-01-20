import { getReviews } from './../services/reviews'
import actionTypes  from './types';
const {GET_REVIEWS} = actionTypes;

export const actionGetReviews= () => dispatch => {
    getReviews().then( reviews => {
            dispatch({
                type: GET_REVIEWS,
                payload: categorizeReviews(reviews.data)
            });
        });
    
}


function checkReviewType(review, type){
    const regx = new RegExp(`^${type}:`, 'ig')
    return regx.test(review.body);
}

function categorizeReviews(reviews){
    let general = [];
    let logic = [];
    let style = [];
    let standard = [];
    let doc = [];
    let design = [];
    let test = [];
    let validation = [];
    let security = [];
    reviews && reviews.forEach(review => {
        if(checkReviewType(review, 'general')){
            review.body = review.body.slice('general'.length+1);
            general.push(review);
        }
        else if(checkReviewType(review, 'logic')){
            review.body = review.body.slice('logic'.length+1);
            logic.push(review);
        }
        else if(checkReviewType(review, 'style')){
            review.body = review.body.slice('style'.length+1);
            style.push(review);
        }
        else if(checkReviewType(review, 'standard')){
            review.body = review.body.slice('standard'.length+1);
            standard.push(review);
        }
        else if(checkReviewType(review, 'design')){
            review.body = review.body.slice('design'.length+1);
            doc.push(review);
        }
        else if(checkReviewType(review, 'validation')){
            review.body = review.body.slice('validation'.length+1);
            style.push(review);
        }
        else if(checkReviewType(review, 'test')){
            review.body = review.body.slice('test'.length+1);
            standard.push(review);
        }
        else if(checkReviewType(review, 'security')){
            review.body = review.body.slice('security'.length+1);
            standard.push(review);
        }
        else {
            general.push(review);
        }
    })

    return { general, logic, style, standard, doc, test, design, validation, security };
}