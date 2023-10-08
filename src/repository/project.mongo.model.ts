import { Schema, model } from 'mongoose';
import { Project } from '../entities/project.js';

const projectSchema = new Schema<Project>({
  name: String,
  description: String,
  startDate: String,
  endData: String,
  isActive: Boolean,
  dataUpdated: String,
  img: String,
  author: {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
  },
  participants: [
    {
      id: String,
      firstName: String,
      lastName: String,
      email: String,
    },
  ],
});

export const ProjectModel = model('Project', projectSchema, 'projects');
