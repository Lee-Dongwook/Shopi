import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { validate } from 'class-validator';
import { Product } from '@product/product.entity';
import {
  CreateProductDto,
  LinkAttributeToProductDto,
  LinkCategoryToProductDto,
} from '@product/dto';
import { Helpers } from '@utils/helpers';
import { Category } from '@category/category.entity';

@Injectable()
export class ProductService {}
