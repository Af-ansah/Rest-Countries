import { Component } from '@angular/core';
import { ThemeManangementService } from '../../theme-manangement.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
iconSrc: any;
buttonText: any;

  constructor(public themeService: ThemeManangementService) {}

  toggleTheme(): void {
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
    this.updateThemeDetails();
  }


  private updateThemeDetails(): void {
    const currentTheme = this.themeService.getTheme();
    if (currentTheme === 'dark') {
      this.iconSrc = '../../../assets/Images/sun-icon.png'; // Image for light mode
      this.buttonText = 'Light Mode';
    } else {
      this.iconSrc = '../../../assets/Images/moon-icon.png'; // Image for dark mode
      this.buttonText = 'Dark Mode';
    }
  }
}
