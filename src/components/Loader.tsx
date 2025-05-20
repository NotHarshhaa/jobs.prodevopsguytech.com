"use client";

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <p className="label">finding</p>
        <div className="words">
          <span className="word">DevOps</span>
          <span className="word">Cloud</span>
          <span className="word">SRE</span>
          <span className="word">Platform</span>
          <span className="word">DevOps</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 32px 0 rgba(16, 30, 54, 0.08);
  }

  .label {
    color: #64748b;
    font-family: inherit;
    font-weight: 400;
    font-size: 1.25rem;
  }

  .words {
    overflow: hidden;
    position: relative;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 0.5rem;
    background: linear-gradient(to right, #956afa, #ff80b5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    font-size: 1.25rem;
    animation: spin_4991 4s infinite;
  }

  @keyframes spin_4991 {
    10% {
      transform: translateY(-102%);
    }
    25% {
      transform: translateY(-100%);
    }
    35% {
      transform: translateY(-202%);
    }
    50% {
      transform: translateY(-200%);
    }
    60% {
      transform: translateY(-302%);
    }
    75% {
      transform: translateY(-300%);
    }
    85% {
      transform: translateY(-402%);
    }
    100% {
      transform: translateY(-400%);
    }
  }

  /* Dark mode adjustments */
  .dark & {
    .loader {
      background: rgba(0, 0, 0, 0.5);
      border-color: rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.2);
    }
    
    .label {
      color: #94a3b8;
    }
  }
`

export default Loader;
