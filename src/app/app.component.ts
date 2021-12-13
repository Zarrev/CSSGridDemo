import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSSGridDemo';
  displayFormValue = 'grid';
  gridTemplateColumns = '1fr 1fr';
  gridTemplateRows = '1fr 1fr';
  cubeArray: number[] = [1, 2];

  addCube(): void {
    const lastItem: number = this.cubeArray.pop();
    this.cubeArray.push(lastItem);
    this.cubeArray.push(lastItem + 1);
  }
}
