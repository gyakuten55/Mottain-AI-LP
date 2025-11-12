'use client';

import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          {/* Meta Heroes Logo */}
          <div className={styles.logoSection}>
            <Image
              src="/images/metaheroes_logo.png"
              alt="Meta Heroes"
              width={300}
              height={60}
              className={styles.metaHeroesLogo}
            />
          </div>

          {/* Company Info */}
          <div className={styles.companyInfo}>
            <p className={styles.companyName}>株式会社Meta Heroes</p>
            <p className={styles.companyAddress}>〒530-0027</p>
            <p className={styles.companyAddress}>大阪市北区堂山町1-5</p>
            <p className={styles.companyAddress}>三共梅田ビル 8F</p>
          </div>

          {/* SNS Icons */}
          <div className={styles.snsIcons}>
            <a href="https://line.me/R/ti/p/@226osklk?ts=01231849&oat_content=url" className={styles.snsIcon} aria-label="LINE" target="_blank" rel="noopener noreferrer">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2"/>
                <path d="M24 12C16.268 12 10 17.432 10 24.098C10 29.254 13.876 33.704 19.324 35.384C19.42 35.606 19.56 36.06 19.596 36.302C19.628 36.524 19.612 36.788 19.6 36.942C19.6 36.942 19.568 37.15 19.556 37.214C19.532 37.342 19.516 37.52 19.724 37.432C19.932 37.344 22.692 35.632 23.956 34.788C24.304 34.814 24.652 34.828 25 34.828C32.732 34.828 39 29.396 39 22.73C39 16.064 32.732 12 24 12ZM29.492 26.344H26.816C26.632 26.344 26.484 26.196 26.484 26.012V20.988C26.484 20.804 26.632 20.656 26.816 20.656H29.492C29.676 20.656 29.824 20.804 29.824 20.988V21.916C29.824 22.1 29.676 22.248 29.492 22.248H27.824V23.156H29.492C29.676 23.156 29.824 23.304 29.824 23.488V24.416C29.824 24.6 29.676 24.748 29.492 24.748H27.824V25.752H29.492C29.676 25.752 29.824 25.9 29.824 26.084V27.012C29.824 27.196 29.676 27.344 29.492 27.344ZM25.156 26.344H22.48C22.296 26.344 22.148 26.196 22.148 26.012V20.988C22.148 20.804 22.296 20.656 22.48 20.656C22.664 20.656 22.812 20.804 22.812 20.988V25.752H25.156C25.34 25.752 25.488 25.9 25.488 26.084V27.012C25.488 27.196 25.34 27.344 25.156 27.344ZM21.156 26.344H18.48C18.296 26.344 18.148 26.196 18.148 26.012V20.988C18.148 20.804 18.296 20.656 18.48 20.656C18.664 20.656 18.812 20.804 18.812 20.988V25.752H21.156C21.34 25.752 21.488 25.9 21.488 26.084V27.012C21.488 27.196 21.34 27.344 21.156 27.344ZM17.156 26.344C16.972 26.344 16.824 26.196 16.824 26.012V20.988C16.824 20.804 16.972 20.656 17.156 20.656C17.34 20.656 17.488 20.804 17.488 20.988V26.012C17.488 26.196 17.34 26.344 17.156 26.344Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/metaheroes100/" className={styles.snsIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2"/>
                <path d="M24 16.5C19.86 16.5 16.5 19.86 16.5 24C16.5 28.14 19.86 31.5 24 31.5C28.14 31.5 31.5 28.14 31.5 24C31.5 19.86 28.14 16.5 24 16.5ZM24 28.8C21.36 28.8 19.2 26.64 19.2 24C19.2 21.36 21.36 19.2 24 19.2C26.64 19.2 28.8 21.36 28.8 24C28.8 26.64 26.64 28.8 24 28.8Z" fill="white"/>
                <path d="M29.4 12H18.6C14.82 12 12 14.82 12 18.6V29.4C12 33.18 14.82 36 18.6 36H29.4C33.18 36 36 33.18 36 29.4V18.6C36 14.82 33.18 12 29.4 12ZM33.3 29.4C33.3 31.68 31.68 33.3 29.4 33.3H18.6C16.32 33.3 14.7 31.68 14.7 29.4V18.6C14.7 16.32 16.32 14.7 18.6 14.7H29.4C31.68 14.7 33.3 16.32 33.3 18.6V29.4Z" fill="white"/>
                <circle cx="31.5" cy="16.5" r="1.5" fill="white"/>
              </svg>
            </a>
            <a href="https://x.com/MetaHeroes_100" className={styles.snsIcon} aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2"/>
                <path d="M28.5 14H31.5L25.5 21L33 34H27L22.5 26.5L17.25 34H14.25L20.75 26.5L13.5 14H19.5L23.5 20.75L28.5 14ZM27.5 32H29L19.5 16H17.75L27.5 32Z" fill="white"/>
              </svg>
            </a>
            <a href="https://aimonday.net/" className={styles.snsIcon} aria-label="AI Monday" target="_blank" rel="noopener noreferrer">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2"/>
                <text x="24" y="28" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">AI</text>
                <text x="24" y="32" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif">Monday</text>
              </svg>
            </a>
            <a href="https://heroegg.com/" className={`${styles.snsIcon} ${styles.heroeggIcon}`} aria-label="Heroegg" target="_blank" rel="noopener noreferrer">
              <div className={styles.heroeggIconWrapper}>
                <Image
                  src="/images/heroegg-logo.png"
                  alt="Heroegg"
                  width={48}
                  height={48}
                  className={styles.heroeggLogo}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          {/* Mottain-AI Logo */}
          <div className={styles.mottainLogo}>
            <Image
              src="/images/logo.png"
              alt="Mottain-AI Heroes"
              width={200}
              height={60}
              className={styles.logo}
            />
          </div>

          {/* Footer Links */}
          <div className={styles.footerLinks}>
            <a href="https://meta-heroes.co.jp" className={styles.footerLink} target="_blank" rel="noopener noreferrer">会社概要</a>
            <span className={styles.separator}>|</span>
            <a href="https://meta-heroes.co.jp/privacypolicy" className={styles.footerLink} target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            <p>© 2025 Meta Heroes All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
