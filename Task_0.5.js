function triangleAreaCalculator(l,b,h)
{
  let s = (l + b + h) / 2;
  let area = Math.sqrt(s * ((s - l) * (s - b) * (s - h)));

  return area;
}
