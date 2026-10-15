import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { Express } from 'express';
import type {} from 'multer';

//? import { Injectable } brings in a NestJS decorator.
@Injectable()
export class CourseService {
    // constructor(private readonly courseService: CourseService) {}

    getAllCourses(): { message: string; data: any[] } {
        return {
            "message": "All courses fetched successfully",
            data : []
        };
    }

    //* ': string' after the parentheses means the function returns a string.
    getCourseById(id: string): { message: string; id: string } {
        return {
            message: `Course fetched successfully`,
            id : id
        };
    }

    createCourse( dto: CreateCourseDto){
        return {
            message: `Course created successfully`,
            data : dto
        };
    }

    updateCourse(id: string, dto: UpdateCourseDto): { message: string; id: string; data: UpdateCourseDto } {
        return {
            message: `Course updated successfully`,
            id : id,
            data: dto,
        };
    }


    patchCourse(id: string, dto: UpdateCourseDto): { message: string; id: string; updatedFields: string[] } {
        return {
            message: `Course patched successfully`,
            id : id,
            updatedFields: Object.keys(dto),
        };
    }

    deleteCourse(id: string): { message: string; id: string } {
        return {
            message: `Course deleted successfully`,
            id : id,
        };
    }

    updateCourseMaterial(id: string, file: Express.Multer.File): { message: string; id: string; fileName: string; path: string } {
        return {
            message: `Course material updated successfully`,
            id : id,
            fileName: file.filename,
            path: `uploads/${file.filename}`,
        };
    }
}
