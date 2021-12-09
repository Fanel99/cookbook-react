import './ThemeSelector.css';
import { useTheme } from '../hooks/useTheme';

export default function ThemeSelector() {
  const themeColors = ['#58249c', '#333333', '#3CB371'];
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
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
