import { useState, useEffect } from 'react';

const TRANSLATIONS = {
  "en-US": {
    "pageTitle": "Life Battery",
    "pageSubtitle": "Visualize your life's energy as it flows through time",
    "birthDateQuestion": "Enter your birthdate",
    "visualizeButton": "Check your life battery",
    "startOverButton": "Reset battery",
    "batteryStatus": "Life Energy Status",
    "charging": "Charging",
    "critical": "Critical",
    "low": "Low Battery",
    "good": "Good Energy",
    "full": "Full Power",
    "yearsLived": "Years Lived",
    "yearsRemaining": "Years Remaining",
    "energyUsed": "Energy Used",
    "energyLeft": "Energy Left",
    "batteryHealth": "Battery Health",
    "lifeStats": "Life Statistics",
    "daysActive": "Days Active",
    "hoursOnline": "Hours Online",
    "heartbeatCycles": "Heartbeat Cycles",
    "breathCycles": "Breath Cycles",
    "sleepCycles": "Sleep Cycles",
    "tips": "Energy Conservation Tips",
    "tipExercise": "Regular exercise boosts your battery efficiency",
    "tipSleep": "Quality sleep optimizes your daily energy cycles",
    "tipNutrition": "Good nutrition maintains optimal battery performance",
    "tipStress": "Managing stress prevents rapid energy drain",
    "tipSocial": "Social connections help maintain energy stability"
  },
  "fr-FR": {
    "pageTitle": "Batterie de Vie",
    "pageSubtitle": "Visualisez l'énergie de votre vie qui s'écoule dans le temps",
    "birthDateQuestion": "Entrez votre date de naissance",
    "visualizeButton": "Vérifier votre batterie de vie",
    "startOverButton": "Réinitialiser la batterie",
    "batteryStatus": "État de l'Énergie Vitale",
    "charging": "En charge",
    "critical": "Critique",
    "low": "Batterie faible",
    "good": "Bonne énergie",
    "full": "Pleine puissance",
    "yearsLived": "Années vécues",
    "yearsRemaining": "Années restantes",
    "energyUsed": "Énergie utilisée",
    "energyLeft": "Énergie restante",
    "batteryHealth": "Santé de la batterie",
    "lifeStats": "Statistiques de vie",
    "daysActive": "Jours actifs",
    "hoursOnline": "Heures en ligne",
    "heartbeatCycles": "Cycles cardiaques",
    "breathCycles": "Cycles respiratoires",
    "sleepCycles": "Cycles de sommeil",
    "tips": "Conseils de Conservation d'Énergie",
    "tipExercise": "L'exercice régulier améliore l'efficacité de votre batterie",
    "tipSleep": "Un sommeil de qualité optimise vos cycles d'énergie quotidiens",
    "tipNutrition": "Une bonne nutrition maintient les performances optimales de la batterie",
    "tipStress": "Gérer le stress empêche la décharge rapide d'énergie",
    "tipSocial": "Les connexions sociales aident à maintenir la stabilité énergétique"
  }
};

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};
const locale = (appLocale !== '{{APP_LOCALE}}') ? findMatchingLocale(appLocale) : findMatchingLocale(browserLocale);
const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['en-US'][key] || key;

export default function LifeBattery() {
  const [step, setStep] = useState(1);
  const [birthdate, setBirthdate] = useState('');
  const [stats, setStats] = useState(null);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  const calculateStats = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    
    // Calculate age and life statistics
    const ageInMs = today - birthDate;
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    
    // Assuming average lifespan of 80 years
    const expectedLifespan = 80;
    const lifePercentage = Math.min((ageInYears / expectedLifespan) * 100, 100);
    const batteryPercentage = Math.max(100 - lifePercentage, 0);
    
    // Calculate various life metrics
    const daysLived = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
    const hoursLived = daysLived * 24;
    const heartbeats = Math.floor(daysLived * 24 * 60 * 70); // ~70 bpm average
    const breaths = Math.floor(daysLived * 24 * 60 * 16); // ~16 breaths per minute
    const sleepHours = Math.floor(daysLived * 8); // ~8 hours sleep per day
    
    return {
      ageInYears: Math.floor(ageInYears),
      yearsRemaining: Math.max(expectedLifespan - Math.floor(ageInYears), 0),
      lifePercentage: Math.round(lifePercentage),
      batteryPercentage: Math.round(batteryPercentage),
      daysLived,
      hoursLived,
      heartbeats,
      breaths,
      sleepHours
    };
  };

  const getBatteryStatus = (percentage) => {
    if (percentage > 80) return { status: t('full'), color: 'green', icon: '⚡' };
    if (percentage > 50) return { status: t('good'), color: 'green', icon: '🔋' };
    if (percentage > 20) return { status: t('low'), color: 'yellow', icon: '🪫' };
    if (percentage > 5) return { status: t('critical'), color: 'red', icon: '🚨' };
    return { status: t('charging'), color: 'blue', icon: '⚡' };
  };

  const getBatteryColor = (percentage) => {
    if (percentage > 50) return 'from-green-400 to-green-600';
    if (percentage > 20) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-600';
  };

  const handleSubmit = () => {
    const newStats = calculateStats(birthdate);
    setStats(newStats);
    setStep(2);
    
    // Animate battery percentage
    setAnimatedPercentage(0);
    setTimeout(() => {
      setAnimatedPercentage(newStats.batteryPercentage);
    }, 500);
  };

  useEffect(() => {
    if (stats && animatedPercentage < stats.batteryPercentage) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(prev => Math.min(prev + 1, stats.batteryPercentage));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [animatedPercentage, stats]);

  const getFormattedNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const renderBattery = () => {
    if (!stats) return null;
    
    const batteryStatus = getBatteryStatus(stats.batteryPercentage);
    const totalCells = 20; // Number of battery cells
    const activeCells = Math.floor((animatedPercentage / 100) * totalCells);
    
    return (
      <div className="bg-black p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-light text-white mb-2">{t('batteryStatus')}</h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">{batteryStatus.icon}</span>
            <span className={`text-lg font-medium ${
              batteryStatus.color === 'green' ? 'text-green-400' :
              batteryStatus.color === 'yellow' ? 'text-yellow-400' :
              batteryStatus.color === 'red' ? 'text-red-400' : 'text-blue-400'
            }`}>
              {batteryStatus.status}
            </span>
          </div>
        </div>

        {/* Vertical Battery with Cells */}
        <div className="flex flex-col items-center mb-6">
          {/* Battery Terminal */}
          <div className="w-16 h-6 bg-gray-500 rounded-t-lg mb-1"></div>
          
          {/* Battery Body */}
          <div className="w-32 bg-gray-800 border-4 border-gray-500 rounded-lg p-3 relative" style={{height: '320px'}}>
            {/* Battery Cells */}
            <div className="flex flex-col-reverse space-y-reverse space-y-1 h-full">
              {Array.from({ length: totalCells }, (_, index) => {
                const cellIndex = index; // Bottom to top filling
                const isActive = cellIndex < activeCells;
                const cellPercentage = ((cellIndex + 1) / totalCells) * 100;
                
                let cellColor = 'bg-gray-700';
                if (isActive) {
                  if (cellPercentage > 60) {
                    cellColor = 'bg-gradient-to-r from-green-400 to-green-500 shadow-lg shadow-green-500/50';
                  } else if (cellPercentage > 25) {
                    cellColor = 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/50';
                  } else {
                    cellColor = 'bg-gradient-to-r from-red-400 to-red-500 shadow-lg shadow-red-500/50';
                  }
                }
                
                return (
                  <div
                    key={index}
                    className={`flex-1 rounded-sm transition-all duration-300 ${cellColor} ${
                      isActive ? 'animate-pulse' : ''
                    }`}
                    style={{
                      animationDelay: `${(totalCells - index) * 100}ms`
                    }}
                  />
                );
              })}
            </div>
            
            {/* Percentage Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-white drop-shadow-lg bg-black bg-opacity-75 px-2 py-1 rounded">
                {Math.round(animatedPercentage)}%
              </span>
            </div>
          </div>
          
          {/* Charging/Lightning Effect */}
          {stats.batteryPercentage < 10 && (
            <div className="mt-2 text-yellow-400 animate-bounce">
              <span className="text-2xl">⚡</span>
            </div>
          )}
        </div>

        {/* Battery Stats */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-gray-400 text-sm">{t('yearsLived')}</div>
            <div className="text-white text-xl font-bold">{stats.ageInYears}</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-gray-400 text-sm">{t('yearsRemaining')}</div>
            <div className="text-white text-xl font-bold">{stats.yearsRemaining}</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-gray-400 text-sm">{t('energyUsed')}</div>
            <div className="text-white text-xl font-bold">{stats.lifePercentage}%</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-gray-400 text-sm">{t('energyLeft')}</div>
            <div className="text-white text-xl font-bold">{100 - stats.lifePercentage}%</div>
          </div>
        </div>
      </div>
    );
  };

  const renderDetailedStats = () => {
    if (!stats) return null;
    
    return (
      <div className="mt-8 bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl font-light text-white mb-4">{t('lifeStats')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black p-4 rounded-lg border border-gray-700">
            <div className="text-green-400 text-sm font-medium">{t('daysActive')}</div>
            <div className="text-white text-lg">{getFormattedNumber(stats.daysLived)}</div>
          </div>
          <div className="bg-black p-4 rounded-lg border border-gray-700">
            <div className="text-blue-400 text-sm font-medium">{t('hoursOnline')}</div>
            <div className="text-white text-lg">{getFormattedNumber(stats.hoursLived)}</div>
          </div>
          <div className="bg-black p-4 rounded-lg border border-gray-700">
            <div className="text-red-400 text-sm font-medium">{t('heartbeatCycles')}</div>
            <div className="text-white text-lg">{getFormattedNumber(stats.heartbeats)}</div>
          </div>
          <div className="bg-black p-4 rounded-lg border border-gray-700">
            <div className="text-cyan-400 text-sm font-medium">{t('breathCycles')}</div>
            <div className="text-white text-lg">{getFormattedNumber(stats.breaths)}</div>
          </div>
          <div className="bg-black p-4 rounded-lg border border-gray-700 md:col-span-2">
            <div className="text-purple-400 text-sm font-medium">{t('sleepCycles')}</div>
            <div className="text-white text-lg">{getFormattedNumber(stats.sleepHours)} hours</div>
          </div>
        </div>
      </div>
    );
  };

  const renderTips = () => {
    return (
      <div className="mt-8 bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-light text-white mb-4 flex items-center">
          <span className="mr-2">💡</span>
          {t('tips')}
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="text-green-400">🏃‍♂️</span>
            <p className="text-gray-300 text-sm">{t('tipExercise')}</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-400">😴</span>
            <p className="text-gray-300 text-sm">{t('tipSleep')}</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-yellow-400">🥗</span>
            <p className="text-gray-300 text-sm">{t('tipNutrition')}</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-red-400">🧘‍♀️</span>
            <p className="text-gray-300 text-sm">{t('tipStress')}</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-purple-400">👥</span>
            <p className="text-gray-300 text-sm">{t('tipSocial')}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleReset = () => {
    setBirthdate('');
    setStats(null);
    setAnimatedPercentage(0);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light text-white mb-2">
            <span className="mr-3">🌱</span>
            {t('pageTitle')}
          </h1>
          <p className="text-gray-400">{t('pageSubtitle')}</p>
        </div>
        
        {step === 1 ? (
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h2 className="text-xl font-light mb-6 text-white text-center">{t('birthDateQuestion')}</h2>
            <div>
              <input
                type="date"
                className="w-full p-4 bg-black border border-gray-600 rounded-lg mb-6 text-white focus:outline-none focus:border-green-500 transition-colors"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-medium"
                disabled={!birthdate}
              >
                {t('visualizeButton')}
              </button>
            </div>
          </div>
        ) : (
          <>
            {renderBattery()}
            {renderDetailedStats()}
            {renderTips()}
            <button
              onClick={handleReset}
              className="mt-8 w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600"
            >
              {t('startOverButton')}
            </button>
          </>
        )}
      </div>
    </div>
  );
}