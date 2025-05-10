import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'

})
export class IconsService {

  public icons: string[] = ['arch', 'filters', 'music', 'logout', 'pacman', 'config', 'search'];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerCustomIcons();
  }

  registerCustomIcons(): void {
    this.icons.forEach(iconName => {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(`icons/${iconName}.svg`)
      )
    });
  }
}