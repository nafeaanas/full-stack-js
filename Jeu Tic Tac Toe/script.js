
let turn = 'x';
let squares = [];
let title = document.querySelector('.title');
function end(num1,num2,num3)
{
    title.innerHTML = `player ${squares[num1]} winner`;
    result= window.localStorage.getItem(squares[num1]);
    window.localStorage.setItem(squares[num1],++result);
    document.getElementById('item' + num1).style.background = '#002B5B';
    document.getElementById('item' + num2).style.background = '#002B5B';
    document.getElementById('item' + num3).style.background = '#002B5B';
    //console.log(window.localStorage.getItem(squares[num1]));
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){
        location.reload()
    }, 4000);

}  

function winner()
{
    for (let i = 1; i<10; i++)
    {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !='')
    {
        //console.log('done')
        end(1,2,3);
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !='')
    {
        //console.log('done')
        end(4,5,6);
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !='')
    {
        //console.log('done')
        end(7,8,9);
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !='')
    {
        //console.log('done')
        end(1,4,7);
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] !='')
    {
        //console.log('done')
        end(2,5,8);
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] !='')
    {
        //console.log('done')
        end(3,6,9);
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !='')
    {
        //console.log('done')
        end(1,5,9);
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] !='')
    {
        //console.log('done')
        end(3,5,7);
    }
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'x'
        element.style.color= '#FFB200';
        turn = 'o';
        title.innerHTML = 'Player O'
    }
    else if(turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'o'
        turn = 'x';
        title.innerHTML = 'Player X'
    }
    winner();
}