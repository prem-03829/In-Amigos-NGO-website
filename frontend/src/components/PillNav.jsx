import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? '#1a1a1a';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, {
          width: 'auto',
          duration: 0.6,
          ease
        });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(img, {
      scale: 1.15,
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoLeave = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(img, {
      scale: 1,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  useEffect(() => {
    const menu = mobileMenuRef.current;
    const hamburger = hamburgerRef.current;
    if (!menu) return;

    if (isMobileMenuOpen) {
      gsap.set(menu, { visibility: 'visible' });
      gsap.fromTo(
        menu,
        { opacity: 0, y: 10, scaleY: 1 },
        {
          opacity: 1,
          y: 0,
          scaleY: 1,
          duration: 0.3,
          ease,
          transformOrigin: 'top center'
        }
      );
      if (hamburger) {
        const lines = hamburger.querySelectorAll('.hamburger-line');
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      }
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        scaleY: 1,
        duration: 0.2,
        ease,
        transformOrigin: 'top center',
        onComplete: () => {
          gsap.set(menu, { visibility: 'hidden' });
        }
      });
      if (hamburger) {
        const lines = hamburger.querySelectorAll('.hamburger-line');
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }
  }, [isMobileMenuOpen, ease]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMobileMenuClick?.();
  };

  const isExternalLink = (href) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = (href) => href && !isExternalLink(href);

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor
  };

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-[5000] pointer-events-none">
      <nav 
        className={`pointer-events-auto rounded-full p-2 flex items-center border border-black/5 backdrop-blur-md shadow-md relative z-[5001] ${className}`} 
        aria-label="Primary" 
        style={{ ...cssVars, background: baseColor }}
      >
        {isRouterLink(items?.[0]?.href) ? (
          <Link
            className="ml-2 mr-4 flex items-center"
            to={items[0].href}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
            role="menuitem"
            ref={el => {
              logoRef.current = el;
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} className="h-10 w-auto object-contain" />
          </Link>
        ) : (
          <a
            className="ml-2 mr-4 flex items-center"
            href={items?.[0]?.href || '#'}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
            ref={el => {
              logoRef.current = el;
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} className="h-10 w-auto object-contain" />
          </a>
        )}

        <div className="hidden lg:block" ref={navItemsRef}>
          <ul className="flex gap-1 list-none m-0 p-0" role="menubar">
            {items.map((item, i) => (
              <li key={item.href} role="none">
                {isRouterLink(item.href) ? (
                  <Link
                    role="menuitem"
                    to={item.href}
                    className={`relative px-5 py-2.5 rounded-full no-underline font-semibold text-[0.9rem] overflow-hidden block transition-colors duration-300 ${activeHref === item.href ? 'is-active' : ''}`}
                    style={{ 
                      color: activeHref === item.href ? hoveredPillTextColor : resolvedPillTextColor,
                      backgroundColor: activeHref === item.href ? pillColor : 'transparent'
                    }}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="absolute left-1/2 rounded-full z-0 pointer-events-none"
                      style={{ backgroundColor: pillColor }}
                      aria-hidden="true"
                      ref={el => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="relative z-10 flex flex-col items-center">
                      <span className="pill-label block">{item.label}</span>
                      <span 
                        className="pill-label-hover absolute top-0 left-0 w-full text-center whitespace-nowrap" 
                        style={{ color: hoveredPillTextColor }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                  </Link>
                ) : (
                  <a
                    role="menuitem"
                    href={item.href}
                    className={`relative px-5 py-2.5 rounded-full no-underline font-semibold text-[0.9rem] overflow-hidden block transition-colors duration-300 ${activeHref === item.href ? 'is-active' : ''}`}
                    style={{ 
                      color: activeHref === item.href ? hoveredPillTextColor : resolvedPillTextColor,
                      backgroundColor: activeHref === item.href ? pillColor : 'transparent'
                    }}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="absolute left-1/2 rounded-full z-0 pointer-events-none"
                      style={{ backgroundColor: pillColor }}
                      aria-hidden="true"
                      ref={el => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="relative z-10 flex flex-col items-center">
                      <span className="pill-label block">{item.label}</span>
                      <span 
                        className="pill-label-hover absolute top-0 left-0 w-full text-center whitespace-nowrap" 
                        style={{ color: hoveredPillTextColor }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="lg:hidden bg-none border-none cursor-pointer p-2.5 flex flex-col justify-center items-center gap-1.5 mr-2 w-10 h-10 relative z-[5005] pointer-events-auto active:scale-90 transition-transform"
          style={{ touchAction: 'manipulation' }}
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="w-6 h-[2px] block transition-all duration-300 hamburger-line" style={{ background: resolvedPillTextColor }} />
          <span className="w-6 h-[2px] block transition-all duration-300 hamburger-line" style={{ background: resolvedPillTextColor }} />
        </button>
      </nav>

      <div 
        className="fixed top-[90px] left-5 right-5 rounded-[24px] p-3 shadow-2xl z-[4999] border border-black/5 lg:hidden pointer-events-auto" 
        ref={mobileMenuRef} 
        style={{ background: baseColor }}
      >
        <ul className="list-none p-0 m-0">
          {items.map(item => (
            <li key={item.href}>
              {isRouterLink(item.href) ? (
                <Link
                  to={item.href}
                  className={`block px-5 py-3.5 no-underline font-semibold rounded-[16px] transition-all duration-300 ${activeHref === item.href ? 'text-white' : ''}`}
                  style={{ 
                    color: activeHref === item.href ? hoveredPillTextColor : resolvedPillTextColor,
                    backgroundColor: activeHref === item.href ? pillColor : 'transparent'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`block px-5 py-3.5 no-underline font-semibold rounded-[16px] transition-all duration-300 ${activeHref === item.href ? 'text-white' : ''}`}
                  style={{ 
                    color: activeHref === item.href ? hoveredPillTextColor : resolvedPillTextColor,
                    backgroundColor: activeHref === item.href ? pillColor : 'transparent'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
