import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqAccordionComponent } from '../faq-accordion/faq-accordion.component';
import { IndustryCarouselComponent } from '../industry-carousel/industry-carousel.component';

@Component({
  selector: 'app-service',
  
  imports: [CommonModule, FaqAccordionComponent, IndustryCarouselComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
 service_1 = [
  {
    title: 'Custom AI Application Development',
    description: 'Tailored AI solutions leveraging NVIDIA technologies for innovation.',
    imageUrl: 'assets/images/service/1.svg',
  },
  {
    title: 'AI Model Development and Training',
    description: 'Designing, training, and optimizing high-performance AI models using NVIDIA GPUs.',
    imageUrl: 'assets/images/service/2.svg',
  },
  {
    title: 'Generative AI Application Development',
    description: ' Creating applications for content creation, code generation, and data analysis using large language models.',
    imageUrl: 'assets/images/service/3.svg',
  },
  {
    title: 'AI Application Modernization',
    description: "Re-architecting and optimizing existing applications to harness NVIDIA's accelerated computing platform.",
    imageUrl: 'assets/images/service/4.svg',
  },  
];
service_2 = [
  {
    title: 'NVIDIA-Powered Infrastructure Design and Deployment',
    description: 'On-premises or cloud-based AI infrastructure using NVIDIA DGX systems and GPUs.',
    imageUrl: 'assets/images/service/5.svg',
  },
  {
    title: 'GPU Cluster Management and Optimization',
    description: 'Managing and optimizing GPU clusters for maximum performance.',
    imageUrl: 'assets/images/service/6.svg',
  },
  {
    title: 'AI Platform Integration',
    description: 'Seamlessly integrating NVIDIA AI Enterprise into IT infrastructures and cloud platforms. ',
    imageUrl: 'assets/images/service/7.svg',
  },
  {
    title: 'Edge AI Deployment',
    description: "Deploying AI models on NVIDIA Jetson platforms for real-time, edge computing applications.",
    imageUrl: 'assets/images/service/8.svg',
  },  
];
service_3 = [
  {
    title: 'Computer Vision',
    description: 'Solutions for image recognition, object detection, and video analysis.',
    imageUrl: 'assets/images/service/9.svg',
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'Applications for sentiment analysis, machine translation, text summarization, and chatbots.',
    imageUrl: 'assets/images/service/10.svg',
  },
  {
    title: 'Data Analytics and Machine Learning',
    description: 'End-to-end services, including data preprocessing, model training, and deployment.',
    imageUrl: 'assets/images/service/11.svg',
  },
  {
    title: 'High-Performance Computing (HPC)',
    description: "Accelerating scientific simulations, research, and data analysis using NVIDIA GPUs.",
    imageUrl: 'assets/images/service/12.svg',
  },  
]
}
