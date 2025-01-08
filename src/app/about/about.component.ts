import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Conference {
  pic: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  conferences: Conference[] = [
    {
      pic: "https://www.comic-con.org/uploads/2023/10/museum-entrance-hero-1024x679-1.webp",
      title: "Comic Con",
      date: "2025",
      category: "Entertainment",
      description: "San Diego Comic-Con (SDCC) is a comic book convention and multi-genre entertainment event held annually in San Diego, California. It is held at the San Diego Convention Center.",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ubPowKu84cCuw_ni6bsgNcCE2AJaHUWK2w&s",
      title: "HAU Udays",
      date: "2025",
      category: "Entertainment",
      description: "UDAYS is the annual .",
    }
  ]
}
