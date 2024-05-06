from django.db import models
from django.utils import timezone

class Post(models.Model):
    adv_no = models.CharField(max_length=200, null=False)
    post_name = models.CharField(max_length=500, null=False)
    category_name = models.CharField(max_length=200, null=False)
    state_ut = models.CharField(max_length=100, null=False)
    sub_category_name = models.CharField(max_length=200, null=True,blank=True)
    post_date = models.DateField(null=True)
    short_desc = models.TextField()
    total_vacancy = models.IntegerField()
    gen_fees = models.IntegerField()
    others_fees = models.IntegerField(null=True,blank=True)
    ph_fees = models.IntegerField( null=True,blank=True)
   

    def __str__(self):
        return self.adv_no  