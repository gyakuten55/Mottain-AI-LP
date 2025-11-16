'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* ロゴ */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Mottain-AI Heroes"
            width={200}
            height={50}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className={styles.nav}>
          <a
            href="#materials"
            className={`${styles.navButton} ${styles.secondary}`}
            onClick={(e) => handleNavClick(e, 'materials')}
          >
            資料請求
          </a>
          <a
            href="#consultation"
            className={`${styles.navButton} ${styles.primary}`}
            onClick={(e) => handleNavClick(e, 'consultation')}
          >
            無料相談
          </a>
        </nav>

        {/* ハンバーガーメニューボタン */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* モバイルメニュー */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <a
          href="#materials"
          className={`${styles.mobileNavButton} ${styles.secondary}`}
          onClick={(e) => handleNavClick(e, 'materials')}
        >
          資料請求
        </a>
        <a
          href="#consultation"
          className={`${styles.mobileNavButton} ${styles.primary}`}
          onClick={(e) => handleNavClick(e, 'consultation')}
        >
          無料相談
        </a>
      </div>
    </header>
  );
};

export default Header;
