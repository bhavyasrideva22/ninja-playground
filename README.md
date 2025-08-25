# Coding Ninjas Homepage Clone

A modern, responsive React application that replicates the Coding Ninjas homepage with advanced animations, interactive effects, and a custom cursor system.

## 🚀 Features

### ✨ Core Features
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design
- **Modern UI**: Clean, professional interface matching Coding Ninjas branding
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Custom Cursor**: Glowing circle cursor with trail effect and hover states
- **Scroll Animations**: Advanced scroll-triggered animations using Intersection Observer

### 🎨 Animation System
- **Scroll-triggered animations**: Elements animate as they enter the viewport
- **Staggered animations**: Sequential animations for lists and grids
- **Hover effects**: Scale, shadow, and color transitions on interactive elements
- **Parallax effects**: Subtle parallax scrolling for depth
- **Custom keyframes**: Smooth, professional animation curves

### 🎯 Interactive Components
- **Hero Section**: Large headline with animated statistics and lead capture form
- **Stats Cards**: Animated cards with hover effects and icon rotations
- **Course Offerings**: Timeline-based layout with staggered animations
- **Navigation**: Responsive navigation with smooth transitions
- **Custom Cursor**: Follows mouse with trail effect and interactive states

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling and responsive design
- **shadcn/ui** for pre-built components
- **Lucide React** for icons
- **Intersection Observer API** for scroll animations

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── CustomCursor.tsx    # Custom cursor component
│   ├── HeroSection.tsx     # Hero section with animations
│   ├── StatsSection.tsx    # Statistics cards
│   ├── OfferingsSection.tsx # Course offerings timeline
│   ├── Navigation.tsx      # Navigation component
│   └── ...                 # Other sections
├── hooks/
│   ├── useAdvancedScrollAnimation.tsx  # Advanced scroll animations
│   ├── useScrollAnimation.tsx          # Basic scroll animations
│   └── use-mobile.tsx                  # Mobile detection
├── pages/
│   ├── Index.tsx           # Main homepage
│   └── NotFound.tsx        # 404 page
└── lib/
    └── utils.ts            # Utility functions
```

## 🎭 Animation System

### Scroll Animations
The app uses a sophisticated scroll animation system with multiple animation types:

```typescript
// Basic scroll animation
const { ref, isInView, animationClasses } = useAdvancedScrollAnimation({
  animationType: 'slideUp',
  delay: 200,
  threshold: 0.1
});

// Staggered animations for lists
const { ref, animatedItems } = useStaggeredAnimation(
  [1, 2, 3, 4], // Array of items
  { 
    animationType: 'scaleIn', 
    staggerDelay: 200 
  }
);
```

### Animation Types
- `fadeIn`: Simple opacity transition
- `slideUp`: Slide from bottom with fade
- `slideLeft`: Slide from left with fade
- `slideRight`: Slide from right with fade
- `scaleIn`: Scale from 95% to 100%
- `rotateIn`: Rotate and scale animation

### Custom Cursor
The custom cursor provides:
- Smooth following animation with easing
- Trail effect with configurable length
- Hover states for interactive elements
- Scale and opacity changes on hover

```typescript
<CustomCursor size={32} trailLength={8} />
```

## 🎨 Styling System

### Tailwind Configuration
The app extends Tailwind with custom colors and animations:

```typescript
// Custom Coding Ninjas colors
colors: {
  'hero-bg': 'hsl(var(--hero-bg))',
  'hero-text': 'hsl(var(--hero-text))',
  'stats-accent': 'hsl(var(--stats-accent))',
  // ... more custom colors
}
```

### CSS Custom Properties
CSS variables for consistent theming:

```css
:root {
  --primary: 17 100% 60%;  /* Orange #FF6B35 */
  --primary-hover: 17 100% 55%;
  --hero-bg: 222 20% 8%;   /* Dark hero background */
  --gradient-hero: linear-gradient(135deg, hsl(var(--hero-bg)), hsl(222 25% 12%));
}
```

### Animation Classes
Pre-built animation classes for common effects:

```css
.button-glow {
  animation: glow 2s ease-in-out infinite;
}

.card-hover:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ninja-playground

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

## 🎯 Customization Guide

### Adding New Animations
1. **Create new keyframes** in `src/index.css`:
```css
@keyframes yourAnimation {
  from { /* initial state */ }
  to { /* final state */ }
}
```

2. **Add to Tailwind config** in `tailwind.config.ts`:
```typescript
animation: {
  'your-animation': 'yourAnimation 0.6s ease-out',
}
```

3. **Use in components**:
```typescript
className="animate-your-animation"
```

### Customizing Colors
1. **Update CSS variables** in `src/index.css`:
```css
:root {
  --your-color: 200 100% 50%; /* HSL values */
}
```

2. **Add to Tailwind config**:
```typescript
colors: {
  'your-color': 'hsl(var(--your-color))',
}
```

### Adding New Sections
1. **Create component** in `src/components/`
2. **Import scroll animations**:
```typescript
import { useAdvancedScrollAnimation } from "@/hooks/useAdvancedScrollAnimation";
```

3. **Add to main page** in `src/pages/Index.tsx`

### Customizing Cursor
Modify `src/components/CustomCursor.tsx`:
- Change `size` prop for cursor size
- Adjust `trailLength` for trail effect
- Modify colors and animations in the component

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Optimizations
- Simplified animations for better performance
- Touch-friendly interactive elements
- Optimized spacing and typography

## 🎨 Component Examples

### Hero Section with Animations
```tsx
const HeroSection = () => {
  const { ref: headlineRef, animationClasses: headlineClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 200
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div ref={headlineRef} className={headlineClasses}>
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Get the tech career you deserve.{" "}
          <span className="text-primary hover:text-primary-hover transition-colors">
            Faster.
          </span>
        </h1>
      </div>
    </section>
  );
};
```

### Animated Stats Cards
```tsx
const StatsSection = () => {
  const { ref: statsRef, animatedItems } = useStaggeredAnimation(
    [1, 2, 3, 4],
    { animationType: 'scaleIn', staggerDelay: 200 }
  );

  return (
    <div ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          className={`transition-all duration-500 hover:scale-105 hover:shadow-xl ${
            animatedItems[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Card content */}
        </Card>
      ))}
    </div>
  );
};
```

## 🔧 Performance Optimizations

- **Intersection Observer**: Efficient scroll detection
- **CSS transforms**: Hardware-accelerated animations
- **Debounced scroll events**: Smooth performance
- **Lazy loading**: Components load as needed
- **Optimized images**: WebP format with fallbacks

## 🎯 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project is for educational purposes. All rights belong to their respective owners.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
