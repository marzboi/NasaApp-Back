/* eslint-disable no-unused-vars */

import { ProjectRepo } from '../repository/project.mongo.repository.js';
import { Controller } from './basic.controller.js';
import { Project } from '../entities/project.js';
import createDebug from 'debug';
const debug = createDebug('Marketplace:PostController');

export class ProjectController extends Controller<Project> {
  constructor(public repo: ProjectRepo) {
    super();
    debug('Instantiated');
  }
}
