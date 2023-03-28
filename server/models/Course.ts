import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;


export type CourseStatus = 'pending' | 'approved' | 'rejected';


export interface ICourse extends mongoose.Document {
    name: string;
    price: number;
    duration: number;
    date: Date;
    coursePic: string;
    status: CourseStatus;
    author: string;


}

export interface ICourseModel extends ICourse, Document { }




const CourseSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    price:{
        type: Number,
        required: true,

    },
    duration: {
        type: Number,
        required: true,

    },
    date: {
        type: Date,
        default: Date.now,

    },
    author: {
        type: String,
        required: true,

    },
    coursePic:{
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: true,
       

    }

});

const Course = mongoose.model<ICourse>('Course', CourseSchema);

export default Course;

