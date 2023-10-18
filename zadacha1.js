
function sdsd(daynum)
{
    dn = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    if (daynum >= 1 && daynum <= 7) 
    {
        return dn[daynum - 1];
    }
    else
    {
        return "неверный номер недели";
    }
}
daynum = 7;
dn = sdsd(daynum);
console.log(dn);