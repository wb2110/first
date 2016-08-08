var mailer=require('nodemailer');
var transpoter=mailer.createTransport('smtps://18453149533%40sina.cn:@smtp.sina.cn');
console.log('1');
var mailoption={
        from:'"wave" <18453149533@sina.cn>',
        to:'@qq.com',
        subject:'hehe',
        text:'nihao',
        html:'<b>feefefe</b>'};
transpoter.sendMail(mailoption,function(err,info){
        if(err){
         console.log('error:',err);
        }else{
                console.log('hehe',info);
        }
        console.log('hehe');
}
);