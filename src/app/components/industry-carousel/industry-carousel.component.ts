import { Component, HostListener } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common'; // Use CommonModule here

@Component({
  selector: 'app-industry-carousel',
  standalone: true,
  templateUrl: './industry-carousel.component.html',
  styleUrl: './industry-carousel.component.css',
  imports: [MaterialModule, CommonModule]
})
export class IndustryCarouselComponent {
   // List of carousel items
   carouselItems = [
    { image: 'assets/images/industry-carousel/carousel1.png', title: 'Telecom', description: 'Optimize 5G networks with NVIDIA-powered AI solutions.', icon: "assets/images/industry-carousel/telecom.svg"},
    { image: 'assets/images/industry-carousel/carousel2.png', title: 'Healthcare', description: 'Revolutionize patient care and drug discovery with AI.', icon: "assets/images/industry-carousel/healthcare.svg" },
    { image: 'assets/images/industry-carousel/carousel3.png', title: 'Manufacturing', description: 'Enable predictive maintenance and robotic automation.',icon: "assets/images/industry-carousel/manufacturing.svg" },
    { image: 'assets/images/industry-carousel/carousel1.png', title: 'Finance', description: 'Enhance fraud detection and financial analysis with AI.', icon: "assets/images/industry-carousel/telecom.svg" },
    { image: 'assets/images/industry-carousel/carousel2.png', title: 'Retail', description: 'Personalize shopping experiences with AI-driven insights.',icon: "assets/images/industry-carousel/healthcare.svg" }
  ];

  // Current slide index
  currentIndex = 0;

  // Number of visible cards
  visibleCards = 3;

  // Auto-slide interval reference
  autoSlideInterval: any;

  // Maximum index for carousel
  get maxIndex() {
    return this.carouselItems.length - this.visibleCards;
  }

  // Translate percentage for the wrapper
  get currentTranslate() {
    return -this.currentIndex * (100 / this.visibleCards);
  }

  // Navigate to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.maxIndex; // Loop back to the last slide
    }
    this.resetAutoSlide(); // Reset auto-slide timer
  }

  // Navigate to the next slide
  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first slide
    }
    this.resetAutoSlide(); // Reset auto-slide timer
  }

  // Adjust the number of visible cards based on screen size
  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      this.visibleCards = 1; // Show 1 card on small screens
    } else if (screenWidth <= 1024) {
      this.visibleCards = 2; // Show 2 cards on medium screens
    } else {
      this.visibleCards = 3; // Show 3 cards on large screens
    }
  }

  // Initialize auto-slide and responsive settings
  ngOnInit() {
    this.onResize(); // Set the initial value of visibleCards based on screen size
    this.startAutoSlide(); // Start the auto-slide
  }

  // Start auto-slide
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(); // Automatically go to the next slide
    }, 1115000); // Change slide every 3 seconds
  }

  // Reset auto-slide timer
  resetAutoSlide() {
    clearInterval(this.autoSlideInterval); // Clear the existing interval
    this.startAutoSlide(); // Restart the auto-slide
  }

  // Clean up the interval when the component is destroyed
  ngOnDestroy() {
    clearInterval(this.autoSlideInterval); // Clear the interval to prevent memory leaks
  }
}
