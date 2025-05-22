import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';


export const routes: Routes = [
    {
        path: "", //nothing typed will direct to home
        component: HomeComponent
    },
    {
        path: "blog", //someone types in blog, blog component will be generated
        component: BlogComponent
    },
     {
        path: "contact", //someone types in blog, blog component will be generated
        component: ContactComponent
    },
    {
        path: "blog/create", //someone types in blog, blog component will be generated
        component: AddPostComponent
    },
    {
        path: "blog/edit/:id", //someone types in blog, blog component will be generated
        component: EditPostComponent
    }
];
