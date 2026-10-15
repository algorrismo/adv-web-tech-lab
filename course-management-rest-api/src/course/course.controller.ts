import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

//This tells NestJS that every route inside this Controller starts with '/course.'
@Controller('course')
export class CourseController {
    //* This is called dependency injection.
    // It makes the CourseService available inside the Controller.
    // Think of it like the Controller telling NestJS:
    // "I need CourseService to perform the work."
    constructor(private readonly courseService: CourseService) {}

    @Get()
    getAllCourses() {
        return this.courseService.getAllCourses();
        // return this.courseService.getAllCourses()
    }

    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() dto: CreateCourseDto) {
        return this.courseService.createCourse(dto);
    }

    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
        return this.courseService.updateCourse(id, dto);
    }

    @Post(':id/upload')
    @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
    uploadCourseMaterial(@Param('id') id: string, @UploadedFile() file?: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('Attach a file using the form-data key "file".');
        }
        return this.courseService.updateCourseMaterial(id, file);
    }
    @Patch(':id')
    patchCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
        return this.courseService.patchCourse(id, dto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        return this.courseService.deleteCourse(id);
    }
}
