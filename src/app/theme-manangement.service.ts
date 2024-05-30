import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeManangementService {
  private renderer:Renderer2;
  private currentTheme: 'light' | 'dark';

  constructor(rendererFactory: RendererFactory2){
  this.renderer =  rendererFactory.createRenderer(null, null);
  this.currentTheme = 'light';
 }
 setTheme(theme: 'light' | 'dark'):void {
  this.currentTheme =  theme;
  if(theme === 'dark'){
    this.renderer.setAttribute(document.body, 'data-theme', 'dark');
  }else {
    this.renderer.removeAttribute(document.body, 'data-them', 'light');
   
  }
 }


getTheme(): 'light' | 'dark' {
  return this.currentTheme;
}

}
