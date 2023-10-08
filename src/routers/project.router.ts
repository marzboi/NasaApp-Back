import { Router as createRouter } from 'express';
import { ProjectController } from '../controllers/project.controller.js';
import { Project } from '../entities/project.js';
import { Repo } from '../repository/repo.js';
import { ProjectRepo } from '../repository/project.mongo.repository.js';

const repo: Repo<Project> = new ProjectRepo();
const controller = new ProjectController(repo);
export const postRouter = createRouter();

postRouter.get('/', controller.getAll.bind(controller));
