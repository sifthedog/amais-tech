import React from 'react';
import { FaVideo, FaBroadcastTower, FaPhoneSquareAlt } from 'react-icons/fa';

const cardProperties = [
  {
    id: 'monitoring',
    icon: <FaVideo />,
    title: 'Monitoramento',
    content: [
      'Mais segurança para sua empresa ou residência!',
      'Trabalhamos com os sistemas Analógico, HDCVI e IP.',
    ],
  },
  {
    id: 'conectivity',
    icon: <FaBroadcastTower />,
    title: 'Conectividade',
    content: [
      'Melhor performance e organização de redes:',
      '• CAT5e. e CAT6.;',
      '• Interligação com Fibra Óptica;',
      '• Redes Wireless (Indoor e Outdoor);',
    ],
  },
  {
    id: 'phone',
    icon: <FaPhoneSquareAlt />,
    title: 'Telefonia',
    content: [
      'Redução de custos e qualidade na comunicação:',
      '• PABX (Analógicos, Digitais e IP);',
      '• Software de Tarifação;',
      '• Integrações;',
      '• Gravações;',
    ],
  },
];

export { cardProperties };
