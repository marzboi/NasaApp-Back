import { ProjectModel } from './project.mongo.model.js';
import createDebug from 'debug';
import { Project } from '../entities/project.js';
import { Repo } from './repo.js';
const debug = createDebug('Marketplace:PostRepo');

export class ProjectRepo implements Repo<Project> {
  constructor() {
    debug('Marketplace Repo');
  }

  async query(): Promise<Project[]> {
    return ProjectModel.find().exec();
  }
}
