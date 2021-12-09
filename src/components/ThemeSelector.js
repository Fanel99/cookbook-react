import './ThemeSelector.css';
import { useTheme } from '../hooks/useTheme';
import modeIcon from './assets/mode-icon.svg';

export default function ThemeSelector() {
  const themeColors = ['#58249c', '#333333', '#3CB371'];
  const { changeColor, changeMode, mode } = useTheme();

  const toggle = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="mode-icon"
          onClick={toggle}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
