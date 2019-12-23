const {addImage,addFirstName,addLastName,addEmail,addPhone,addGender,Onscroll,load,loadMore}=require('./infinitescroll_adaptive')


test('Testing load Function', function () {
    var result=load()
    expect(result.textContent).toEqual("");
});

test('Testing Onscroll Function', function () {
    var result=Onscroll()
    expect(result.textContent).toEqual(" Last Name: Teja");
});

test('Testing AddLastName Function', function () {
    var result=addLastName('Teja')
    expect(result.textContent).toEqual(" Last Name: Teja");
});

test('Testing AddFirstName Function', function () {
    var result=addFirstName('Ravi')
    expect(result.textContent).toEqual("First Name:  Ravi");
});

test('Testing AddImage Function For Null Function and Both First And Last are not Null', function () {
    var result=addImage(null,'Ravi','Teja')
    expect(result.textContent).toEqual("RT");
});

test('Testing AddGender Function', function () {
    var result=addGender('male')
    expect(result.textContent).toEqual("Gender : male");
});

test('Testing AddPhone Function', function () {
    var result=addPhone('94901753')
    expect(result.textContent).toEqual("Phone :94901753");
});

test('Testing AddEmail Function', function () {
    var result=addEmail('ravi@email.com')
    expect(result.textContent).toEqual("Email: ravi@email.com");
});

test('Testing AddLastName For Null Function', function () {
    var result=addLastName('null')
    expect(result.textContent).toEqual(" Last Name: null");
});

test('Testing AddFirstName For Null Function', function () {
    var result=addFirstName('null')
    expect(result.textContent).toEqual("First Name:  null");
});

test('Testing AddImage For Null Function and Both First And Last are Null', function () {
    var result=addImage(null,null,null)
    expect(result.textContent).toEqual("NA");
});

test('Testing AddGender For Null Function', function () {
    var result=addGender(null)
    expect(result.textContent).toEqual("Gender :null");
});

test('Testing AddPhone For Null Function', function () {
    var result=addPhone(null)
    expect(result.textContent).toEqual("Phone :null");
});

test('Testing AddEmail For Null Function', function () {
    var result=addEmail(null)
    expect(result.textContent).toEqual("Email: null");
});

