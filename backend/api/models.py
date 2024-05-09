from django.db import models
# from django.utils import timezone
# from tinymce.models import HTMLField

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    adv_no = models.CharField(max_length=200, null=False)
    post_name = models.CharField(max_length=500, null=False,unique=True)
    link_post_name = models.CharField(max_length=500, null=False)
    category_name = models.CharField(max_length=200, null=False)
    
    sub_category_name = models.CharField(max_length=200, null=True,blank=True)
    state_ut = models.CharField(max_length=100, null=False)
    post_date = models.DateField(null=True,blank=True)
    short_desc = models.TextField()
    total_vacancy = models.IntegerField(null=True,blank=True)
    gen_fees = models.CharField(max_length=100,null=True,blank=True)
    others_fees = models.CharField(max_length=100,null=True,blank=True)
    ph_fees = models.CharField(max_length=100,null=True,blank=True)
    app_begin_date =models.DateField()
    app_last_date =models.DateField()
    app_last_fees_date=models.DateField(null=True,blank=True)
    exam_date=models.DateField(null=True,blank=True)
    prelim_exam_date=models.DateField(null=True,blank=True)
    main_exam_date=models.DateField(null=True,blank=True)
    interview_exam_date=models.DateField(null=True,blank=True)
    result_exam_date=models.DateField(null=True,blank=True)
    general_vacancy=models.IntegerField(null=True,blank=True)
    obc_vacancy=models.IntegerField(null=True,blank=True)
    sc_vacancy=models.IntegerField(null=True,blank=True)
    st_vacancy=models.IntegerField(null=True,blank=True)
    age_info=models.CharField(max_length=200, null=True,blank=True)
    max_age=models.IntegerField(null=True,blank=True)
    min_age=models.IntegerField(null=True,blank=True)
    relaxation=models.IntegerField(null=True,blank=True)
    education=models.CharField(max_length=500, null=True,blank=True)
    detail_desc=models.TextField(null=True,blank=True)
    apply_online=models.CharField(max_length=100,null=True,blank=True)
    official_website=models.CharField(max_length=100,null=True,blank=True)
    app_notifications=models.CharField(max_length=100,null=True,blank=True)
    medical_std =models.CharField(max_length=200,null=True,blank=True)
   

    def __str__(self):
        return self.adv_no  