import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-draw-area',
  standalone: true,
  imports: [],
  templateUrl: './draw-area.component.html',
  styleUrl: './draw-area.component.css'
})
export class DrawAreaComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasRef', { static: false }) canvasRef!: ElementRef;

  public width: number = 1300;
  public height: number = 600;

  private cx!: CanvasRenderingContext2D;
  private points: Array<any> = [];
  public isAvailable: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.render();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isAvailable) {
      this.write(event);
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.target === this.canvasRef.nativeElement) {
      this.isAvailable = true;
      this.points = [];
      this.write(event); 
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isAvailable = false;
  }

  private render() {
    const canvasEl = this.canvasRef.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 2;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
  }

  private write(event: MouseEvent) {
    const canvasEl = this.canvasRef.nativeElement;
    const rect = canvasEl.getBoundingClientRect();
    const pos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    this.writeSingle(pos);
  }

  private writeSingle(pos: any) {
    this.points.push(pos);
    if (this.points.length > 1) {
      const prevPos = this.points[this.points.length - 2];
      const currentPos = this.points[this.points.length - 1];
      this.drawOnCanvas(prevPos, currentPos);
    }
  }

  private drawOnCanvas(prevPos: any, currentPos: any) {
    if (!this.cx) return;
    this.cx.beginPath();
    this.cx.moveTo(prevPos.x, prevPos.y);
    this.cx.lineTo(currentPos.x, currentPos.y);
    this.cx.stroke();
  }

  public clearZone() {
    this.points = [];
    this.cx.clearRect(0, 0, this.width, this.height);
  }

  public downloadImage() {
    const canvasEl = this.canvasRef.nativeElement;
    const dataUrl = canvasEl.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'canvas-image.png';
    link.click();
  }
}
