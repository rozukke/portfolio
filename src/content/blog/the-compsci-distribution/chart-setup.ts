  import { Chart, registerables } from "chart.js";

  Chart.register(...registerables);
  Chart.defaults.font.family = "'JetBrains Mono Variable', sans-serif";
  Chart.defaults.color = "#ddd";

	export const mainData = [25, 35, 25, 10, 5];
