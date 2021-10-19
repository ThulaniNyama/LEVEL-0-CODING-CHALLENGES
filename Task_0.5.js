function triangleAreaCalculator(l,b,h)
{
  var s = (l + b + h) / 2;
  var area = Math.sqrt(s * ((s - l) * (s - b) * (s - h)));

  return area;
}
