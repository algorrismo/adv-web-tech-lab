import { Module } from '@nestjs/common';
import { CourseController } from './course.controller.js';
import { CourseService } from './course.service.js';

@Module({
  controllers: [CourseController], //registers your Controller
  providers: [CourseService] //egisters your Service, allowing NestJS to inject it.
})
export class CourseModule {}
