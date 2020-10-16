(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return m})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var o=r(2),n=r(6),i=(r(0),r(194)),c={title:"v0.5.x to v0.6.x"},m={unversionedId:"migration-guides/v0.5.x-to-v0.6.x",id:"migration-guides/v0.5.x-to-v0.6.x",isDocsHomePage:!1,title:"v0.5.x to v0.6.x",description:"@InjectTypeOrmQueryService",source:"@site/docs/migration-guides/v0.5.x-to-v0.6.x.md",slug:"/migration-guides/v0.5.x-to-v0.6.x",permalink:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/migration-guides/v0.5.x-to-v0.6.x.md",version:"current",sidebar:"docs",previous:{title:"Query Helpers",permalink:"/nestjs-query/docs/utilities/query-helpers"},next:{title:"v0.10.x to v0.11.x",permalink:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x"}},s=[{value:"<code>@InjectTypeOrmQueryService</code>",id:"injecttypeormqueryservice",children:[]},{value:"<code>TypeOrmQueryService</code>",id:"typeormqueryservice",children:[]},{value:"<code>AssemblerQueryService</code>",id:"assemblerqueryservice",children:[]}],a={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},a,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"injecttypeormqueryservice"},Object(i.b)("inlineCode",{parentName:"h3"},"@InjectTypeOrmQueryService")),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"v0.6.x")," an new decorator was added ",Object(i.b)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," to auto-create a TypeOrm query service."),Object(i.b)("p",null,"This means you no longer need to manually create a service in order to expose your CRUD endpoints."),Object(i.b)("p",null,"To enable decorator import the ",Object(i.b)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," to your module definition"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n")),Object(i.b)("p",null,"One you have imported the module you can inject a ",Object(i.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { InjectTypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectTypeOrmQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n")),Object(i.b)("h2",{id:"typeormqueryservice"},Object(i.b)("inlineCode",{parentName:"h2"},"TypeOrmQueryService")),Object(i.b)("p",null,"In the previous version of ",Object(i.b)("inlineCode",{parentName:"p"},"@nestjs-query")," the ",Object(i.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," translated between the DTO and Entity. For a more in-depth description see ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/doug-martin/nestjs-query/issues/41"}),"#41")),Object(i.b)("p",null,"In the latest version the ",Object(i.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," only operates on entities."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"v0.5.x")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService } from '@nestjs-query/core';\nimport { TypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemDTO)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemDTO, TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) readonly repo: Repository<TodoItemEntity>) {\n    super(repo);\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"v0.6.x")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService } from '@nestjs-query/core';\nimport { TypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) readonly repo: Repository<TodoItemEntity>) {\n    super(repo);\n  }\n}\n")),Object(i.b)("h2",{id:"assemblerqueryservice"},Object(i.b)("inlineCode",{parentName:"h2"},"AssemblerQueryService")),Object(i.b)("p",null,"In previous versions of ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query")," the ",Object(i.b)("inlineCode",{parentName:"p"},"QueryService")," would automatically translate betwen your DTO and database type. This created a soft-dependecy between the persistence service and the view layer. In ",Object(i.b)("inlineCode",{parentName:"p"},"v0.6.0")," ",Object(i.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," was introduced to handle translating between your DTO and persistence type."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { AssemblerQueryService, QueryService } from '@nestjs-query/core';\nimport { InjectTypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemAssembler } from './todo-item.assembler';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemDTO)\nexport class TodoItemService extends AssemblerQueryService<TodoItemDTO, TodoItemEntity> {\n  constructor(\n    assembler: TodoItemAssembler,\n    @InjectTypeOrmQueryService(TodoItemEntity) queryService: QueryService<TodoItemEntity>,\n  ) {\n    super(assembler, queryService);\n  }\n}\n")))}p.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=n.a.createContext({}),p=function(e){var t=n.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(a.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,l=u["".concat(c,".").concat(d)]||u[d]||y[d]||i;return r?n.a.createElement(l,m(m({ref:t},a),{},{components:r})):n.a.createElement(l,m({ref:t},a))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:o,c[1]=m;for(var a=2;a<i;a++)c[a]=r[a];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);