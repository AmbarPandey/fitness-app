export function getBMIMotivation(bmi) {

  if (bmi < 18.5) {
    return "Your body needs strength. Stop waiting. Start building.";
  }

  if (bmi >= 18.5 && bmi < 25) {
    return "You’re in the healthy zone. Now build power and discipline.";
  }

  if (bmi >= 25 && bmi < 30) {
    return "This is your wake-up call. Every workout moves you closer to control.";
  }

  return "Your body is asking for change. Discipline starts today.";
}