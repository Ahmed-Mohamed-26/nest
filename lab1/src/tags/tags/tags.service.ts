import { Injectable } from '@nestjs/common';
import { tag } from '../tags.dto';

@Injectable()
export class TagsService {
  tags: tag[] = [
    {
      id: '1',
      name: 'blockchain'
    },
    {
      id: '2',
      name: 'Node.js'
    },
    {
      id: '3',
      name: 'JavaScript'
    },
    {
      id: '4',
      name: 'TypeScript'
    },
    {
      id: '5',
      name: 'c#'
    },
    {
      id: '6',
      name: 'HTML'
    },
    {
      id: '7',
      name: 'CSS'
    },
    {
      id: '8',
      name: 'c++'
    },
    {
      id: '9',
      name: 'noone'
    },
    {
      id: '10',
      name: 'bootstrap'
    }
  ];

  getTag() {
    return this.tags;
  }
  getTagById(id: string) {
    return this.tags.find((tag) => tag.id == id);
  }
  addTag(body: tag) {
    body.id = (Math.random() * 1000).toString();
    this.tags.push(body);
    return this.tags;
  }
  deleteTag(id: string) {
    this.tags = this.tags.filter((ele) => ele.id != id);
    return this.tags;
  }
  updateTag(id: string, body: tag) {
    const targetTagIndex = this.tags.findIndex((ele) => ele.id == id);
    this.tags[targetTagIndex].name = body.name;
    return this.tags[targetTagIndex];
  }
}
